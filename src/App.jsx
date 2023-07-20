import { useState } from 'react';
import InputForm from "./components/InputForm";
import EditForm from "./components/EditForm";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<ul>
  <li>
    <span>タイトル</span>
    <InputForm />
    <button>編集</button>
    <EditForm />
    <button>削除</button>
  </li>
</ul>
    </>
  )
}

export default App
