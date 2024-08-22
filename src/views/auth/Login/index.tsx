import style from "./Login.module.css"
const IndexView = () => {
  return (
    <div className={style.login}>
      <h1 className="text-3xl">Login</h1>
      <button className="border border-1 px-5 py-2 my-5">Login</button>
    </div>
  )
}

export default IndexView