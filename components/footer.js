// 导出默认组件 Footer，用于显示页面的底部内容
export default function Footer() {
  return (
    <>
      {/* 使用 TailwindCSS 定义 Footer 的样式 */}
      <footer className="font-wq w-full text-white text-center mt-auto py-4 text-xl">
        {/* 提示信息，提醒用户不要将该教程直接用于生产环境 */}
        <p>该项目仅限练习web3开发，不建议用于生产环境</p>
      </footer>
    </>
  );
}
