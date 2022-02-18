import Image from 'next/image'
import HeaderItem from './HeaderItem';

// Icons
import {
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon,
} from '@heroicons/react/outline'

const menuItems = [
    ["HOME", HomeIcon],
    ["Trending", LightningBoltIcon],
    ["Verified", BadgeCheckIcon],
    ["Collections", CollectionIcon],
    ["Search", SearchIcon],
    ["Account", UserIcon],
]

export const Header = () => 
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
        <div className="flex flex-grow justify-evenly max-w-2xl">
            {menuItems.map((item, key) => <HeaderItem key={key} title={item[0]} Icon={item[1]}/> )}
        </div>
        <Image className="object-contain" src="https://links.papareact.com/ua6" width={200} height={100} />
    </header>

export default Header;