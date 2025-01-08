import logo from './assets/images/logo.svg';
import houseIcon from './assets/images/icon-home.svg';
import archivedIcon from './assets/images/icon-archive.svg';
import tagIcon from './assets/images/icon-tag.svg';

export default function SidebarNavigation() {
	return (
		<aside className="sidebar text-preset-4">
			<div className="sidebar__logo">
				<img src={logo} alt="logo" className="sidebar__logo--img" />
			</div>
			<div className="sidebar__all-archived">
				<span className="sidebar__block">
					<img src={houseIcon} className="sidebar__block--img" />
					All Notes
				</span>
				<span className="sidebar__block">
					<img src={archivedIcon} alt="" className="sidebar__block--img" />
					Archived Notes
				</span>
			</div>
			<div className="sidebar__tags">
				<span className="sidebar__tags--tags">Tags</span>
				<span className="sidebar__block">
					<img src={tagIcon} alt="" className="sidebar__block--img" />
					Cooking
				</span>
				<span className="sidebar__block">
					<img src={tagIcon} alt="" className="sidebar__block--img" />
					Dev
				</span>
			</div>
		</aside>
	);
}
