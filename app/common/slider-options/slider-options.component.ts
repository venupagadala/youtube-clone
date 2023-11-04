import {
    Component
}
from '@angular/core';

@Component({ selector: 'app-slider-options', templateUrl: './slider-options.component.html', styleUrls: ['./slider-options.component.scss'] }) export class SliderOptionsComponent {
    HomeData = [{url:"../../../assets/Images/home.png", title:'home'} , { url:"../../../assets/Images/shorts.png",title: 'Shorts'}, { url:"../../../assets/Images/subs.png", title:'Subscriptions'}]
    yourData = [{url:"../../../assets/Images/history.png", title:'History'} , { url:"../../../assets/Images/watch-later.png",title: 'Watch later'}, { url:"../../../assets/Images/like.png", title:'Liked videos'}]
    SettingsData = [{url:"../../../assets/Images/settings.png", title:'Settings'} , { url:"../../../assets/Images/flag.png",title: 'Report history'}, { url:"../../../assets/Images/help.png", title:'Help'}, { url: "../../../assets/Images/feedback.png", title:'Send Feedback'}]
    moreData = [{url:"../../../assets/Images/tube.png", title:'youtube Premium'} , { url:"../../../assets/Images/tv.png",title: 'youtube TV'}, { url:"../../../assets/Images/music.png", title:'youtube Music'}, { url: "../../../assets/Images/kids.png", title:'youtube Kids'}]
  }