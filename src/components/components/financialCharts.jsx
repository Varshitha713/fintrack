import React from 'react';
import { Bar, Doughnut } from "react-chartjs-2";
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

const FinancialCharts = ({ incomeVsExpenseData, expenseData }) => {
  if (!incomeVsExpenseData || !expenseData) {
    return null;
  }

  // Check if there is any data to show in the Doughnut chart
  const hasExpenseData =
    expenseData?.datasets &&
    expenseData.datasets.length > 0 &&
    expenseData.datasets[0].data &&
    expenseData.datasets[0].data.some((value) => value > 0);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Income vs Expenses</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <Bar 
            data={incomeVsExpenseData} 
            options={{
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                x: { stacked: false },
                y: { stacked: false, beginAtZero: true }
              }
            }} 
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Expense Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] flex items-center justify-center">
          {hasExpenseData ? (
            <Doughnut 
              data={expenseData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    position: 'bottom'
                  }
                }
              }}
            />
          ) : (
            <div className="text-center w-full">
              <p className="text-lg text-muted-foreground">No expenses yet!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialCharts;