import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  AlertTriangleIcon,
  BadgeCheckIcon,
  UserCheck2Icon,
  UserIcon,
  UserRoundXIcon,
} from 'lucide-react';
import Link from 'next/link';

export default function EmployeesStats() {
  const totalEmployees = 101;
  const employeesPresent = 20;
  const employeesPresentPercentage = (employeesPresent / totalEmployees) * 100;

  return (
    <div className="grid lg:grid-cols-3 gap-4">
      <Card className="gap-0">
        <CardHeader>
          <CardTitle className="text-base">Total employees</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-between items-center">
          <div className="flex gap-2">
            <UserIcon />
            <span className="text-5xl font-bold">{totalEmployees}</span>
          </div>
          <div>
            <Button asChild size="xs">
              <Link href="/dashboard/employees">View All</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
      <Card className="gap-0">
        <CardHeader>
          <CardTitle className="text-base">Employees present</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {employeesPresentPercentage > 75 ? (
              <UserCheck2Icon />
            ) : (
              <UserRoundXIcon />
            )}

            <span className="text-5xl font-bold">{employeesPresent}</span>
          </div>
        </CardContent>
        <CardFooter>
          {employeesPresentPercentage > 75 ? (
            <span className="text-xs text-green-500 flex gap-1 items-center">
              <BadgeCheckIcon />${employeesPresentPercentage.toFixed(1)}% of
              employees are present
            </span>
          ) : (
            <span className="text-xs text-red-500 flex gap-1 items-center">
              <AlertTriangleIcon />
              Only {employeesPresentPercentage.toFixed(1)}% of employees are present
            </span>
          )}
        </CardFooter>
      </Card>
      <Card className="border-primary gap-0">
        <CardHeader>
          <CardTitle className="text-base">Employee of the month</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
}
