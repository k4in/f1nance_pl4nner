import { createFileRoute, Link } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/shadcn/form';
import { Button } from '@/components/shadcn/button';
import { Input } from '@/components/shadcn/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/shadcn/select';
import { Checkbox } from '@/components/shadcn/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/shadcn/radio-group';
import { Textarea } from '@/components/shadcn/textarea';
import { RequiredMarker } from '@/components/form/required-marker';
import { toast } from 'sonner';

export const Route = createFileRoute('/add/')({
  component: RouteComponent,
});

const baseSchema = z.object({
  amount: z.coerce.number().min(0.01, 'Amount is required'),
  description: z.string().min(1, 'Description is required'),
  date: z.string().min(1, 'Start date is required'),
  type: z.enum(['expense', 'income'], { message: 'Please specify a valid transaction type' }),
  category_id: z.string().min(1, 'At least 1 Category is required'),
  notes: z.string().optional(),
  account_id: z.string().min(1, 'Account is required'),
});

const nonRecurringSchema = baseSchema.extend({
  is_recurring: z.literal(false),
});

const recurringSchema = baseSchema.extend({
  is_recurring: z.literal(true),
  recurrence_type: z.enum(['weekly', 'monthly'], { message: 'Please specify a valid recurrence frequency' }),
  recurrence_end: z.string().optional(),
});

const schema = z.discriminatedUnion('is_recurring', [nonRecurringSchema, recurringSchema]);

type FormValues = z.infer<typeof schema>;

const defaultValues = {
  amount: 0,
  description: '',
  type: 'expense',
  account_id: '',
  category_id: '',
  date: '',
  is_recurring: false,
  recurrence_end: '',
  recurrence_type: 'monthly',
  notes: '',
} as FormValues;

const category_idTempOptions = [
  { value: 'testoption1', label: 'TEST Category 1' },
  { value: 'testoption2', label: 'TEST Category 2' },
  { value: 'testoption3', label: 'asdadasd Category 33' },
  { value: 'testoption4', label: 'Category 4' },
];

const account_idTempOptions = [
  { value: 'testoption1', label: 'Bank Account' },
  { value: 'testoption2', label: 'PayPal' },
  { value: 'testoption3', label: 'CreditCard' },
];

function onSubmit(data: FormValues) {
  toast.success(
    <div>
      Transaction has been added!
      <br />
      <p className="text-muted-foreground text-xs">Check logs for temporary output</p>
    </div>
  );
  console.log(data);
}

function RouteComponent() {
  const methods = useForm<FormValues>({ defaultValues, resolver: zodResolver(schema) });

  return (
    <main>
      <Form {...methods}>
        <form onSubmit={methods.handleSubmit((data) => onSubmit(data))}>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              <FormField
                control={methods.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Amount
                      <RequiredMarker />
                    </FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Description
                      <RequiredMarker />
                    </FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormDescription>What is the purpose of your transaction?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="type"
                render={({ field }) => (
                  <FormItem className="space-y-1">
                    <FormLabel>
                      Transaction Type
                      <RequiredMarker />
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex items-center gap-4"
                      >
                        <FormItem className="flex items-center gap-1">
                          <FormControl>
                            <RadioGroupItem value="income" />
                          </FormControl>
                          <FormLabel className="font-normal">Income</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center gap-1">
                          <FormControl>
                            <RadioGroupItem value="expense" />
                          </FormControl>
                          <FormLabel className="font-normal">Expense</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="account_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Account
                      <RequiredMarker />
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select an Account" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {account_idTempOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="category_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Category
                      <RequiredMarker />
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a Category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {category_idTempOptions.map((option) => (
                          <SelectItem key={option.value} value={option.value}>
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col gap-6">
              <FormField
                control={methods.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      {methods.watch('is_recurring') ? 'Date of first Transaction' : 'Transaction date'}
                      <RequiredMarker />
                    </FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    {methods.watch('is_recurring') && (
                      <FormDescription>
                        {methods.watch('recurrence_type') === 'monthly'
                          ? 'Repeats every month on the same day'
                          : 'Repeats every week on the same weekday'}
                      </FormDescription>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={methods.control}
                name="is_recurring"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel>Recurring Transaction?</FormLabel>
                  </FormItem>
                )}
              />
              {methods.watch('is_recurring') && (
                <>
                  <FormField
                    control={methods.control}
                    name="recurrence_end"
                    shouldUnregister={true}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Recurrence End</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormDescription>
                          Recurrence ends after this date. Does not change the frequency
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={methods.control}
                    name="recurrence_type"
                    shouldUnregister={true}
                    render={({ field }) => (
                      <FormItem className="space-y-1">
                        <FormLabel>
                          Recurrence Frequency
                          <RequiredMarker />
                        </FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="flex items-center gap-4"
                          >
                            <FormItem className="flex items-center gap-1">
                              <FormControl>
                                <RadioGroupItem value="weekly" />
                              </FormControl>
                              <FormLabel className="font-normal">Weekly</FormLabel>
                            </FormItem>
                            <FormItem className="flex items-center gap-1">
                              <FormControl>
                                <RadioGroupItem value="monthly" />
                              </FormControl>
                              <FormLabel className="font-normal">Monthly</FormLabel>
                            </FormItem>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </>
              )}
              <FormField
                control={methods.control}
                name="notes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Optional notes</FormLabel>
                    <FormControl>
                      <Textarea {...field} />
                    </FormControl>
                    <FormDescription>Additional details to describe the transaction</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-10">
            <Button type="submit">Add Transaction</Button>
            <Button type="button" variant="outline" onClick={() => console.log(methods.getValues())}>
              Log values
            </Button>
            <Button type="button" asChild variant="destructive">
              <Link to="/">Abort</Link>
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}
