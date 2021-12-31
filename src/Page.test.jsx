import { render } from "@testing-library/react";
import Page from "./Page";

describe("Page", () => {
  const tasks = [
    {
      id: 1,
      title: "공부 하기",
    },
    {
      id: 2,
      title: "밥 먹기",
    },
  ];
  const taskTitle = "투두 리스트";
  const onChangeTitle = jest.fn();
  const onClickAddTask = jest.fn();
  const onClickDeleteTask = jest.fn();

  const renderPage = () => render(
    <Page
      taskTitle={taskTitle}
      tasks={tasks}
      onChangeTitle={onChangeTitle}
      onClickAddTask={onClickAddTask}
      onClickDeleteTask={onClickDeleteTask}
    />,
  );

  it("To-do 텍스트를 그린다", () => {
    const { container } = renderPage();
    expect(container).toHaveTextContent("To-do");
  });

  it("투두 리스트를 그려낸다", () => {
    const { container } = renderPage();
    expect(container).toHaveTextContent(tasks[0].title);
    expect(container).toHaveTextContent(tasks[1].title);
  });

  it("투두 인풋을 그려낸다", () => {
    const { getByPlaceholderText } = renderPage();
    const toDoInput = getByPlaceholderText("할 일을 입력해 주세요");
    expect(toDoInput).toBeInTheDocument();
    expect(toDoInput).toHaveValue(taskTitle);
  });
});
