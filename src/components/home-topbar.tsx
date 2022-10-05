import { Logout, MoreVert, ReportProblem, Search, Settings } from '@mui/icons-material';
import {
	AppBar,
	Avatar,
	Badge,
	ButtonGroup,
	Divider,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from '@mui/material';
import { useRef, useState } from 'react';

export default function (props: { logout(): void }) {
	// component logic
	const menuAnchor = useRef(null);

	// component state
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	function closeMenu() {
		setIsMenuOpen(false);
	}

	function openMenu() {
		setIsMenuOpen(true);
	}

	// component layout
	return (
		<AppBar color={'inherit'} elevation={0} position={'static'}>
			<Toolbar>
				<Badge color={'default'} variant={'dot'}>
					<Avatar sx={{ height: 32, width: 32 }} />
				</Badge>
				<Typography marginX={1} noWrap={true} variant={'h6'}>
					Home
				</Typography>
				<ButtonGroup sx={{ marginLeft: 'auto' }}>
					<IconButton>
						<Search />
					</IconButton>
					<IconButton onClick={openMenu} ref={menuAnchor}>
						<MoreVert />
					</IconButton>
				</ButtonGroup>
			</Toolbar>
			<Menu anchorEl={menuAnchor.current} onClose={closeMenu} open={isMenuOpen}>
				<MenuItem onClick={closeMenu}>
					<ListItemIcon>
						<Settings />
					</ListItemIcon>
					<ListItemText>Settings</ListItemText>
				</MenuItem>
				<MenuItem onClick={closeMenu}>
					<ListItemIcon>
						<ReportProblem />
					</ListItemIcon>
					<ListItemText>Problem</ListItemText>
				</MenuItem>
				<Divider />
				<MenuItem onClick={props.logout}>
					<ListItemIcon>
						<Logout />
					</ListItemIcon>
					<ListItemText>Logout</ListItemText>
				</MenuItem>
			</Menu>
		</AppBar>
	);
}
