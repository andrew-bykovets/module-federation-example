const Root = () => {
    return (
      <>
        <div id="sidebar">
          <h1>React Router Contacts</h1>
          <nav>
            <ul>
              <li>
                <a href={`/counter`}>Counter</a>
              </li>
              <li>
                <a href={`/todo`}>Todo</a>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }

  export default Root;