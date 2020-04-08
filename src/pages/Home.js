import React from 'react';
import {todosActions} from '../store/actions'
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {todoSelectors} from "../store/selectors";

const Home = ({LoadAllTodos, todos}) => {
    return (
        <div>
            {/*<button onClick={LoadAllTodos}>asdas</button>*/}
            {/*{*/}
            {/*    todos.map(todo => {*/}
            {/*        return (*/}
            {/*            <div>*/}
            {/*                <p>Title {todo.title}</p>*/}
            {/*                <p>completed {todo.completed.toString()}</p>*/}
            {/*            </div>)*/}
            {/*    })*/}
            {/*}*/}
        </div>
    );
};

const mapStateToProps = (state) => ({
    todos: todoSelectors.getAll(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
    LoadAllTodos: todosActions.TodosListRequest
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);