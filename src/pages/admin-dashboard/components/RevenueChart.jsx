import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import Icon from 'components/AppIcon';

const RevenueChart = () => {
  const monthlyData = [
    { month: 'Jan', revenue: 12500, sessions: 85 },
    { month: 'Feb', revenue: 14200, sessions: 92 },
    { month: 'Mar', revenue: 13800, sessions: 89 },
    { month: 'Apr', revenue: 15600, sessions: 98 },
    { month: 'May', revenue: 17200, sessions: 104 },
    { month: 'Jun', revenue: 16800, sessions: 101 },
    { month: 'Jul', revenue: 18240, sessions: 112 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-body text-sm text-foreground font-medium">{label}</p>
          <p className="font-body text-sm text-success">
            Revenue: ${payload?.[0]?.value?.toLocaleString()}
          </p>
          <p className="font-body text-sm text-primary">
            Sessions: {payload?.[1]?.value}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Revenue Overview Card */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-heading font-semibold text-foreground">
            Revenue Overview
          </h2>
          <div className="flex items-center space-x-2">
            <Icon name="TrendingUp" size={16} className="text-success" />
            <span className="text-sm font-body text-success">+12% vs last month</span>
          </div>
        </div>

        {/* Revenue Chart */}
        <div className="h-64 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
                tickFormatter={(value) => `$${(value / 1000)?.toFixed(0)}k`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#10b981"
                strokeWidth={3}
                dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Summary */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-heading font-bold text-foreground">
              $18,240
            </p>
            <p className="text-sm text-muted-foreground font-body">
              This Month
            </p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-heading font-bold text-foreground">
              112
            </p>
            <p className="text-sm text-muted-foreground font-body">
              Sessions
            </p>
          </div>
        </div>
      </div>
      {/* Sessions Chart */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Session Volume
        </h3>
        
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: '#6b7280' }}
              />
              <Tooltip
                formatter={(value) => [value, 'Sessions']}
                labelStyle={{ color: '#374151' }}
                contentStyle={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px'
                }}
              />
              <Bar
                dataKey="sessions"
                fill="#3b82f6"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      {/* Payment Status */}
      <div className="bg-card rounded-lg border border-border p-6 shadow-soft">
        <h3 className="text-lg font-heading font-semibold text-foreground mb-4">
          Payment Status
        </h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm font-body text-muted-foreground">Paid</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-heading font-medium text-foreground">
                $15,790
              </p>
              <p className="text-xs text-muted-foreground font-body">86% of total</p>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-warning rounded-full"></div>
              <span className="text-sm font-body text-muted-foreground">Pending</span>
            </div>
            <div className="text-right">
              <p className="text-sm font-heading font-medium text-foreground">
                $2,450
              </p>
              <p className="text-xs text-muted-foreground font-body">14% of total</p>
            </div>
          </div>
          
          <div className="w-full bg-muted rounded-full h-2">
            <div className="bg-success h-2 rounded-full" style={{ width: '86%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;