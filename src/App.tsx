import { Mail, FileText, Shield, HelpCircle } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">雀</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">じゃんれき</h1>
            </div>
            <a
              href="mailto:chikuwa196@gmail.com"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors shadow-md"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">お問い合わせ</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <div className="inline-block mb-6">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-red-500 rounded-3xl shadow-2xl flex items-center justify-center">
              <span className="text-white text-5xl font-bold">雀</span>
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            麻雀成績管理アプリ
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            あなたの麻雀ライフをもっと楽しく、もっと分かりやすく。<br />
            成績の記録から分析まで、これ一つで完結。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <FileText className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">簡単記録</h3>
            <p className="text-gray-600 leading-relaxed">
              対局結果を素早く入力。シンプルな操作で、成績の記録が楽々できます。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">詳細分析</h3>
            <p className="text-gray-600 leading-relaxed">
              勝率、平均順位など、あなたの成績を詳しく分析。上達への道筋が見えます。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">充実サポート</h3>
            <p className="text-gray-600 leading-relaxed">
              ご不明な点があれば、いつでもお気軽にお問い合わせください。
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white/80 backdrop-blur-sm py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">お問い合わせ</h2>
            <p className="text-lg text-gray-600">
              アプリに関するご質問、ご要望、不具合の報告など、<br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 sm:p-12 shadow-lg">
            <div className="flex flex-col items-center space-y-6">
              <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <div className="text-center">
                <p className="text-gray-700 mb-4 text-lg">メールアドレス</p>
                <a
                  href="mailto:chikuwa196@gmail.com"
                  className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors break-all"
                >
                  chikuwa196@gmail.com
                </a>
              </div>
              <p className="text-gray-600 text-center max-w-md leading-relaxed">
                通常、2-3営業日以内に返信させていただきます。<br />
                お急ぎの場合は、件名に【緊急】とご記載ください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Terms Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">プライバシーポリシー</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                「じゃんれき」は、ユーザーの皆様のプライバシーを尊重し、個人情報の保護に努めています。
              </p>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">収集する情報</h4>
                <p>本アプリは、麻雀の成績データのみを記録します。個人を特定できる情報は収集しません。</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">データの利用</h4>
                <p>記録されたデータは、お客様の端末内でのみ保存され、外部に送信されることはありません。</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">利用規約</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                「じゃんれき」をご利用いただく際の基本的な規約です。
              </p>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">利用目的</h4>
                <p>本アプリは、個人の麻雀成績管理を目的としています。</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">禁止事項</h4>
                <p>不正な方法でアプリを利用したり、他者に迷惑をかける行為は禁止されています。</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">免責事項</h4>
                <p>アプリの利用によって生じた損害について、当方は責任を負いかねます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">雀</span>
            </div>
            <span className="text-xl font-bold">じゃんれき</span>
          </div>
          <p className="text-gray-400">
            © 2025 じゃんれき. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
