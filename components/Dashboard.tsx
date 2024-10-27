export default function Dashboard() {
    return (
    <div>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Stats Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">Total Users</dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">12,345</dd>
              </div>
            </div>

            {/* Chart Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">User Growth</h3>
                <div className="mt-4 h-48 bg-gray-200 rounded">
                  {/* Add your chart component here */}
                  <p className="text-center pt-20 text-gray-500">Chart Placeholder</p>
                </div>
              </div>
            </div>

            {/* Recent Activity Card */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
                <ul className="mt-4 space-y-2">
                  <li className="text-sm text-gray-600">User John Doe logged in</li>
                  <li className="text-sm text-gray-600">New order #1234 received</li>
                  <li className="text-sm text-gray-600">Product X updated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

