import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart";

type BackendSkillProps = {
  chartConfig: ChartConfig;
  backendData: {
    skill: string;
    percentage: number;
  }[];
};

const BackendChart = ({ chartConfig, backendData }: BackendSkillProps) => {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Frontend Skills Proficiency</CardTitle>
          <CardDescription>
            Skill proficiency in Frontend Development
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={backendData}
              layout="vertical"
              margin={{
                right: 16,
              }}
            >
              <CartesianGrid horizontal={false} />
              <YAxis
                dataKey="skill"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                tickFormatter={(value) => value.slice(0, 3)} // First 3 letters of skill name
                hide
              />
              <XAxis
                dataKey="percentage"
                type="number"
                hide
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="percentage"
                layout="vertical"
                fill="hsl(var(--chart-6))"
                radius={[8, 8, 8, 8]}
              >
                <LabelList
                  dataKey="skill"
                  position="insideLeft"
                  offset={8}
                  className="fill-background"
                  fontSize={12}
                />
                <LabelList
                  dataKey="percentage"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default BackendChart;
