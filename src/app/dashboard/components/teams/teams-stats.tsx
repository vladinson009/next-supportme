import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ListChecksIcon, PieChartIcon, StarIcon, UsersIcon } from 'lucide-react';
import Link from 'next/link';

import cm from '@/../public/images/cm.jpg';
import tf from '@/../public/images/tf.jpg';
import rl from '@/../public/images/rl.jpg';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import Image from 'next/image';
import TeamDistributionChart from './team-distribution-chart';
import SupportTicketsResolved from './suppport-tickets-resolved';

const teamLeaders = [
  { firstName: 'Colin', lastName: 'Murray', avatar: cm },
  { firstName: 'Tom', lastName: 'Philips' },
  { firstName: 'Liam', lastName: 'Fuentes' },
  { firstName: 'Tina', lastName: 'Fey', avatar: tf },
  { firstName: 'Katie', lastName: 'Johnson' },
  { firstName: 'Tina', lastName: 'Jones' },
  { firstName: 'Amy', lastName: 'Adams' },
  { firstName: 'Ryan', lastName: 'Lopez', avatar: rl },
  { firstName: 'Jenny', lastName: 'Jones' },
];

export default function TeamsStats() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-4">
        <Card className="gap-0">
          <CardHeader>
            <CardTitle className="text-base">Total teams</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-between items-center">
            <div className="flex gap-2">
              <UsersIcon />
              <span className="text-5xl font-bold">8</span>
            </div>
            <div>
              <Button asChild size="xs">
                <Link href="/dashboard/teams">View All</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team leaders</span>
              <StarIcon className="text-yellow-500" />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {teamLeaders.map((teamLeader) => (
              <Tooltip key={teamLeader.firstName + teamLeader.lastName}>
                <TooltipTrigger asChild>
                  <Avatar>
                    {!!teamLeader.avatar && (
                      <Image
                        src={teamLeader.avatar}
                        alt={`${teamLeader.firstName} ${teamLeader.lastName} avatar`}
                      />
                    )}
                    <AvatarFallback>
                      {teamLeader.firstName[0] + teamLeader.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                </TooltipTrigger>
                <TooltipContent>
                  {teamLeader.firstName} {teamLeader.lastName}
                </TooltipContent>
              </Tooltip>
            ))}
          </CardContent>
        </Card>
        <Card className="pb-0">
          <CardHeader>
            <CardTitle className="text-base flex justify-between items-center">
              <span>Team distribution</span>
              <PieChartIcon />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <TeamDistributionChart />
          </CardContent>
        </Card>
      </div>
      <Card className="my-4">
        <CardHeader>
          <CardTitle className="flex gap-2 items-center text-lg">
            <ListChecksIcon />
            <span>Support tickets resolved</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="pl-0">
          <SupportTicketsResolved />
        </CardContent>
      </Card>
    </>
  );
}
