import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

import Form from './Form';

const TodosQuery = gql`
{
  todos{
    id
    text
    complete
  }
}
`;

const UpdateMutation = gql`
mutation($id: ID!, $complete: Boolean!) {
  updateTodo(id: $id, complete: $complete)
}
`;

const RemoveMutation = gql`
mutation($id: ID!){
  removeTodo(id: $id)
}
`;

const CreateMutation = gql`
mutation($text: String!){
  createTodo(text: $text){
    id
    text
    complete
  }
}
`;

class App extends Component{
  
  updateTodo = async todo => {
    await this.props.updateTodo({
      variables: {
        id: todo.id,
        complete: !todo.complete
      },
      refetchQueries: [{
        query: TodosQuery,
        variables: {
          id: todo.id,
          complete: !todo.complete
        }
      }]
    });
  };
  
  removeTodo = async todo => {
    await this.props.removeTodo({
      variables: {
        id: todo.id,
      },
      refetchQueries: [{
        query: TodosQuery,
        variables: {
          id: todo.id,
        }
      }]
    });
  };

  createTodo = async (text) => {
    await this.props.createTodo({
      variables: {
        text,
      },
      refetchQueries: [{
        query: TodosQuery,
        variables: {
          text
        }
      }]
    });
  }
  
  render(){
    const {data: {loading, todos}} = this.props;
    if(loading){
      return null;
    }
    return (
      <div style={{display: 'flex'}}>
        <div style={{margin: 'auto', width: 400}}>
          <Paper elevation={1}>
            <Form submit={this.createTodo}></Form>
            <List>
              {todos.map(todo => (
                <ListItem key = {todo.id} role = {undefined} dense button 
                  onClick = {() => this.updateTodo(todo)}>
                  <Checkbox checked = {todo.complete} tabIndex = {-1} disableRipple/>
                  <ListItemText primary = {todo.text}/>
                  <ListItemSecondaryAction>
                    <IconButton onClick={() => this.removeTodo(todo)}>
                      <DeleteOutlineIcon/>
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        </div>
      </div>);
      }
    }
    
export default compose(
  graphql(CreateMutation, {name: "createTodo"}),
  graphql(RemoveMutation, {name: "removeTodo"}),
  graphql(UpdateMutation, {name: "updateTodo"}),
  graphql(TodosQuery)
) (App);
      