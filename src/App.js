import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Input from "./components/input/input";
import TaskList from "./components/TaskList/TaskList";
import { get, save } from "./repositories/TodoRepository";
const { v4: uuidv4 } = require("uuid");

function App() {
  const [todos, setTodos] = useState(get());
  const [title, setTitle] = useState("");



  const onSubmit = (title) => {
    let newTodos = [
      {
        id: uuidv4(),
        title: title,
        status: false,
      },
      ...(todos ?? []),
    ];
    setTodos(newTodos);
    save(newTodos);
    setTitle("");
  };

  const onChangeTitle = (value) => {
    setTitle(value);
  };

  const onCompleteTask = (taskId) => {
    // Tìm index của task trong mảng todos thông qua taskid
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos[indexExist] = {
      ...todos[indexExist],
      status: !todos[indexExist].status,
    };
    setTodos([...todos]);
    save(todos);
  };

  const onDeleteTask = (taskId) => {
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos.splice(indexExist, 1);
    setTodos([...todos]);
    save(todos);
  };

  const onEditTask = (taskId, title) => {
    // Tìm index của task trong mảng todos thông qua taskid
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos[indexExist] = {
      ...todos[indexExist],
      title: title,
    };
    save(todos);
    setTodos([...todos]);
  };

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div className="mx-auto w-2/4 bg-white  p-6">
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(title);
            }}
          >
            <Input onChangeInput={onChangeTitle} value={title} />
          </form>
        </div>
        <TaskList
          todos={todos}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
        <Footer countTodo={todos?.length} />
      </div>
    </div>
  );
}

// let data = 123;
// function App() {
//   const [count, setCount] = useState(0);
//   const [isShow, setIsShow] = useState(true);

//   useEffect(() => {
//     console.log("Init count = 10");
//     setCount(10);
//   }, []);

//   useEffect(() => {
//     console.log("data * 2");
//     data = data + 2;
//     console.log(data);
//   }, [count]);

//   return (
//     <div>
//       <div>{count}</div>
//       {isShow ? <TextCompoment>Dung dep zai</TextCompoment> : <></>}
//       <div
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         Increase
//       </div>
//       <div
//         onClick={() => {
//           setIsShow(!isShow);
//         }}
//       >
//         Disable
//       </div>
//     </div>
//   );
// }

// function TextCompoment() {
//   useEffect(() => {
//     return () => {
//       console.log("Trước khi tôi làm gì đó đừng tắt đèn");
//     };
//   }, []);
//   return <div>Show text</div>;
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//       isShowComponentText: true,
//     };
//   }

//   // componentWillMount() {
//   //   console.log("will mount");
//   // }

//   // componentDidMount() {
//   //   console.log("did mount");
//   // }

//   render() {
//     console.log("app render");
//     console.log(this.state.isShowComponentText);
//     if (this.state.isShowComponentText) {
//       console.log("Hien component");
//     } else {
//       console.log("An component");
//     }
//     return (
//       <div>
//         Hello
//         {this.state.isShowComponentText ? (
//           <TextComponent
//             count={this.state.count}
//             setStateApp={() => {
//               this.setState({
//                 count: 0,
//               });
//             }}
//           />
//         ) : (
//           <></>
//         )}
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 1,
//             });
//           }}
//         >
//           Count+
//         </button>
//         <button
//           onClick={() => {
//             this.setState({
//               ...this.state,
//               isShowComponentText: !this.state.isShowComponentText,
//             });
//           }}
//         >
//           An component
//         </button>
//       </div>
//     );
//   }
// }

// class TextComponent extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   componentWillReceiveProps(props) {
//     console.log("Text component componentWillReceiveProps");
//   }

//   shouldComponentUpdate(nextProp) {
//     console.log(nextProp.count);
//     console.log("Text component shouldComponentUpdate");
//     return nextProp.count % 2 == 0;
//   }

//   componentWillUpdate() {
//     console.log("Text component componentWillUpdate");
//   }

//   componentDidUpdate() {
//     console.log("Text component componentDidUpdate");
//   }

//   componentWillUnmount() {
//     this.props.setStateApp();
//     console.log("Text component componentWillUnmount");
//   }

//   render() {
//     console.log("Text component render");
//     return <div>Day la compoent text {this.props.count}</div>;
//   }
// }

export default App;
