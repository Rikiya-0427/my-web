export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-140px)]">
      <h1 className="text-6xl text-teal-500 mb-5 font-extrabold leading-14 tracking-tight text-gray-900 dark:text-gray-100">
        Login
      </h1>
      <form className="flex flex-col p-10 gap-3">
        <input className="p-2 border-b-4" type="text" placeholder="ユーザー名" />
        <input className="p-2 border-b-4" type="password" placeholder="パスワード" />
        <button className="p-2 border-none bg-teal-500 pointer text-white hover:bg-teal-700">Login</button>
      </form>
    </div>
  );
}
