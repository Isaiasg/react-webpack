import React from 'react';
import Button from 'material-ui/Button';
import {connect} from 'react-redux';
import * as todoActions from '../actions/todoActions';

class ButtonComponent extends React.Component {
  constructor(props, context){
    super(props, context);

    this.state = {
      todo: {title: "abc"}
    };

    this.onClickSave = this.onClickSave.bind(this);
  }

  onClickSave(){
    console.log('onclicksave')
    this.props.dispatch(todoActions.createTodoItem(this.state.todo));
  }

  todoRow(todo, index){
    return <div key={index}>{todo.title}</div>;
  }

  render(){
    return (
      <div>
        {this.props.todo.map(this.todoRow)}
        <Button variant="raised" color="primary" onClick={()=>this.onClickSave()}>
          Hello World
        </Button>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps){
  return{
    todo: state.todo
  };
}

export default connect(mapStateToProps)(ButtonComponent);