import ModalIcon from './modal_icon.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faChevronDown, faClockRotateLeft, faGear, faSliders, faVideo } from '@fortawesome/free-solid-svg-icons'

const websites = [
    {
        id:1,
        name: "Youtube",
        img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Youtube_colored_svg-128.png",
        desciption: "Youtube"
    },{
        id:2,
        name: "Google",
        img: "https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-64.png",
        desciption: "Google"
    },{
        id:3,
        name: "Keep",
        img: "https://cdn2.iconfinder.com/data/icons/oneui/24/google_keep-64.png",
        desciption: "Google Keep"
    },{
        id:4,
        name: "Gmail",
        img: "https://cdn1.iconfinder.com/data/icons/google-new-logos-1/32/gmail_new_logo-64.png",
        desciption: "Gmail"
    },{
        id:5,
        name: "Facebook",
        img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-64.png",
        desciption: "Facebook"
    },{
        id:6,
        name: "Notion",
        img: "https://cdn3.iconfinder.com/data/icons/social-media-pack-12/512/Notion-64.png",
        desciption: "Notion"
    },{
        id:7,
        name: "Twitter",
        img: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-64.png",
        desciption: "Twitter"
    }
]

const CardItem = props => {
    return (
        <div className="text-black text-center text-white">
            <div className="flex box-content h-16 w-16 p-1 rounded-lg bg-gray-800 justify-center mb-1">
                <div className="h-12 w-12 mt-2">
                    <img src={props.websites.img} alt={props.websites.desciption} className="h-full w-full"/>
                </div>
            </div>
            <h6 className="text-sm"> {props.websites.name} </h6>
        </div>
    )
}

const CardList = () => {
    return (
        <div className="w-[32rem] text-white">
            <div className="flex flex-wrap gap-4">
                { websites.map( websites => {
                    return <CardItem websites={websites} key={websites.id}/>
                })}
            </div>
        </div>
    ) 
}

function BraveFeqVisited() {
    return (
        <div className="w-1/3 ml-8 flex justify-start rounded-xl text-white">
            <div className="py-2 pl-8">
                <CardList/>
                <div className="flex justify-center gap-1 pt-4">
                    <button className="bg-white w-5 h-3 rounded-lg"/>
                    <button className="bg-white bg-opacity-30 w-3 h-3 rounded-lg"/>
                </div>
            </div>
        </div> 
    )
}

function BraveState() {
    return (
        <div className="flex justify-between text-white">
            <div className="flex w-1/3 rounded-xl ml-8 mt-12 p-6">
                <div className="flex space-x-4 ml-8 mb-4 mt-4">
                    <div className="w-full block space-y-2">
                        <h6 className="text-4xl text-orange-600"> 42,119 </h6>
                        <h6 className="font-medium"> Trackers & ads blocked</h6>
                    </div>
                    <div className="space-y-2">
                        <div className="flex space-x-2 items-end text-violet-400">
                            <h6 className="text-4xl"> 880.9 </h6>
                            <h6 className="text-2xl"> MB </h6>
                        </div>
                        <h6 className="font-medium"> Bandwidth saved</h6>
                    </div>
                    <div className="space-y-2">
                        <div className="flex space-x-2 items-end">
                            <h6 className="text-4xl"> 36 </h6>
                            <h6 className="text-2xl"> minutes </h6>
                        </div>
                        <h6 className="font-medium"> Time saved</h6>
                    </div>
                </div>
            </div>
            <div className="mt-12 mr-8 p-6 pr-12 rounded-xl">
                <h6 className="text-7xl mt-5">6:27</h6>
            </div>
        </div>
    )
}

function BraveModal() {
    return (
        <div className="text-white h-[80rem]">
            <div className="mb-6 flex justify-center">
                <div className="block">
                    <p>Scroll for Brave News</p>
                    <FontAwesomeIcon icon={faChevronDown} className="h-5 pl-16 mt-2"/>
                </div>
            </div>
            <div className="flex"> 
                <div className="w-1/3 pl-12 pt-10">
                    <div>
                        <p>Photo by Priyanuch Konkaew</p>
                    </div>
                </div>
                <div className="bg-white bg-opacity-10 w-1/3 h-[29rem] text-center rounded-lg ">
                    <div className="block px-16 space-y-6">
                        <div className="flex justify-center mt-8">
                            <img src={ModalIcon} alt="modal icon"/>
                        </div>
                        <div>
                            <h6 className="text-3xl">Turn on Brave News, and never miss a story</h6>
                        </div>
                        <div className="space-y-2">
                            <div>
                                <h6 className="text-normal">Follow your favorite sources, in a single feed. Just open a tab in Brave, scroll down, and… voila!</h6>
                            </div>
                            <div>
                                <h6 className="text-normal">Brave News is ad-supported with private, anonymized ads. Learn more..</h6>
                            </div>
                        </div>
                        <div>
                            <button className="p-3 w-full rounded-3xl text-sm">
                                Turn on Brave News
                            </button>
                        </div>
                        <div>
                            <a href="https://www.w3schools.com" className="text-sm">No Thanks</a>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 flex justify-end">
                    <div class="flex gap-4 pr-10 pt-10">
                        <div>
                            <FontAwesomeIcon icon={faSliders} className="h-5"/>
                        </div>
                        <div className="flex">
                            <p className="text-normal">Customize</p>
                            <p className="text-xl">&nbsp;&nbsp;&nbsp;&nbsp;|</p>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGear} className="h-5"/>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBookBookmark} className="h-5"/>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faClockRotateLeft} className="h-5"/>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faVideo} className="h-5"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default function homepage() {

    return (
        <div className="block">
            <div class="bg-background bg-fixed bg-cover">
                <div>
                    <BraveState/>
                </div>
                <div>
                    <BraveFeqVisited/>
                </div>
                <div className="mt-[22rem] ">
                    <BraveModal/>
                </div>
            </div>
        </div>
    )
}