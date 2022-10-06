import { AppViewStack, BillFaad, BillList } from '../components/@';

export default function (props: {}) {
	// component logic

	function openBillCreate() {}

	// component layout
	return (
		<AppViewStack flex={1} sx={{ overflowX: 'hidden', overflowY: 'scroll' }}>
			<BillList bills={[]} filters={[]} />
			<BillFaad openBillCreate={openBillCreate} />
		</AppViewStack>
	);
}
