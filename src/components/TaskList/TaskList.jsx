
import React, { useState, useEffect } from 'react';
import Task from "../task/task";

const TaskList = ({ todos, onCompleteTask, onDeleteTask, onEditTask }) => {
  console.log("day la todos", todos);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const startIndex = (currentPage - 1) * 5;
  const endIndex = startIndex + 5;
  console.log(startIndex);
  console.log(endIndex);
  console.log(todos);
  const currentTodos = todos.slice(startIndex, endIndex);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  useEffect(() => {
    // Tính toán số lượng trang cần hiển thị
    const totalPages = Math.ceil(todos.length / 5);
    setTotalPages(totalPages);
  }, [todos]);
  return (

    <div>{/* Render List data */}
      {currentTodos?.map((value, index) => (
        // binding data to component
        <Task
          key={value.id}
          id={value.id}
          status={value.status}
          title={value.title}
          onCompleteTask={onCompleteTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
      <div className="btn">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>

  );
};

export default TaskList;
