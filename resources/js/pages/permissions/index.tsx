import { Button } from '@/components/ui/button';
import {
    Card,
    CardAction,
    CardContent,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import {
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Dialog, DialogTitle } from '@radix-ui/react-dialog';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Permissions',
        href: '/permissions',
    },
];

export default function Permissions() {
    const [openAddPermissionDialog, setOpenAddPermissionDialog] =
        useState(false);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Permissions" />
            <div className="flex h-full flex-1 flex-col gap-4 overflow-x-auto rounded-xl p-4">
                <Card>
                    <CardHeader className="flex items-center justify-between">
                        <CardTitle>Permissions</CardTitle>
                        <CardAction>
                            <Button
                                variant="default"
                                onClick={() => {
                                    setOpenAddPermissionDialog(true);
                                }}
                            >
                                Add New
                            </Button>
                        </CardAction>
                    </CardHeader>
                    <hr />
                    <CardContent>
                        <Table>
                            <TableHeader className="bg-slate-500 dark:bg-slate-700">
                                <TableRow>
                                    <TableHead className="font-bold text-white">
                                        ID
                                    </TableHead>
                                    <TableHead className="font-bold text-white">
                                        Name
                                    </TableHead>
                                    <TableHead className="font-bold text-white">
                                        Created At
                                    </TableHead>
                                    <TableHead className="font-bold text-white">
                                        Actions
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow className="odd:bg-slate-100 dark:odd:bg-slate-800">
                                    <TableCell>1</TableCell>
                                    <TableCell>Dashboard</TableCell>
                                    <TableCell>01/10/2026</TableCell>
                                    <TableCell>
                                        <Button
                                            className="m-1"
                                            variant={'outline'}
                                            size={'sm'}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            className="m-1"
                                            variant={'destructive'}
                                            size={'sm'}
                                        >
                                            Delete
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                {/* add new permission dialog start  */}
                <Dialog
                    open={openAddPermissionDialog}
                    onOpenChange={setOpenAddPermissionDialog}
                >
                    <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                            <DialogTitle>Add Permission</DialogTitle>
                        </DialogHeader>
                        <hr />
                        <form>
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        type="text"
                                        defaultValue=""
                                    />
                                </div>
                            </div>
                            <DialogFooter className='mt-4'>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit">
                                    <span>Save changes</span>
                                </Button>
                            </DialogFooter>
                        </form>
                    </DialogContent>
                </Dialog>
                 {/* add new permission dialog end  */}
            </div>
        </AppLayout>
    );
}
