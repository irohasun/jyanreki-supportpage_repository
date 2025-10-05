import { Mail, Calendar, TrendingUp, BarChart3 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <img
              src="/icon.jpg"
              alt="じゃんれき"
              className="w-24 h-24 rounded-2xl shadow-lg"
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            じゃんれき
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            あなたの麻雀全てを記録する
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            アプリの特徴
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <Calendar className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">対局記録</h3>
              <p className="text-gray-600 text-sm">
                日付、プレイヤー、点数を簡単に記録
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <TrendingUp className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">履歴確認</h3>
              <p className="text-gray-600 text-sm">
                過去の対局履歴をすぐに確認
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 p-4 rounded-full">
                  <BarChart3 className="w-8 h-8 text-orange-600" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-2">統計分析</h3>
              <p className="text-gray-600 text-sm">
                雀力を見える化して成長をサポート
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img src="/1.png" alt="対局記録画面" className="w-full h-auto" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img src="/2.png" alt="履歴画面" className="w-full h-auto" />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-md">
              <img src="/3.png" alt="統計画面" className="w-full h-auto" />
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl shadow-xl p-8 text-white text-center">
          <div className="flex justify-center mb-4">
            <Mail className="w-12 h-12" />
          </div>
          <h2 className="text-2xl font-bold mb-4">お問い合わせ</h2>
          <p className="mb-6 text-orange-50">
            アプリに関するご質問やご要望がございましたら、お気軽にお問い合わせください。
          </p>
          <a
            href="mailto:chikuwa196@gmail.com"
            className="inline-block bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-orange-50 transition-colors duration-200 shadow-lg"
          >
            chikuwa196@gmail.com
          </a>
        </div>

        <footer className="text-center mt-12 text-gray-500 text-sm">
          <p>© 2025 じゃんれき All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
