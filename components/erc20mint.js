// 导出默认组件 MintERC20，用于实现 ERC20 代币的铸造功能
export default function MintERC20({ accounts }) {
  // 渲染组件内容
  return (
    <>
      {/* 使用 TailwindCSS 进行布局和样式设置 */}
      <div className="flex flex-col flex-grow justify-center items-center font-wq mb-12 mt-20 text-white">
        <div className="w-[640-px] text-center">
          {/* 标题：铸造 LuLuCoin */}
          <h1 className="text-6xl text-[#ff2c73]">铸造 LuLuCoin</h1>
          {true ? (
            // 如果已连接钱包
            <>
              <p className="text-4xl mt-20 mb-12 animate-pulse">
                开始铸造你的第一个 LuLuCoin 代币吧!
              </p>
              {/* 输入框：输入用户想铸造的代币数量 */}
              <div className="flex justify-center mt-4">
                <input
                  className="text-center w-80 h-10 mt-4 mb-4 text-pink-600 text-2xl"
                  type="number"
                  placeholder="请输入你想要铸造的代币数量..."
                  min="0"
                />
              </div>

              {/* 按钮：触发铸造代币 */}
              <div className="flex-col justify-center items-center mt-8">
                <button className="bg-[#D6517D] rounded-md shadow-md text-2xl p-4 w-80">
                  立即铸造！
                </button>
                {/* 显示当前用户的代币余额 */}
                <p className="t text-[#ff2c73] text-xl animate-pulse mt-4">
                  当前的 LuLuCoin 代币余额： {`99999999 ETH`}
                </p>
              </div>
            </>
          ) : (
            // 如果未连接钱包，提示用户连接钱包
            <div className="flex justify-center text-6xl items-center mt-48 mb-20">
              <p className="animate-pulse">连接钱包以开始铸造代币...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
