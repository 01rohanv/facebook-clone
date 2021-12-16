import React from "react";
import Story from "./Story";
import "./StoryReel.css";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://m.media-amazon.com/images/I/819-OB-c05L._SL1500_.jpg"
        profileSrc="https://thumbs.dreamstime.com/z/male-avatar-icon-portrait-handsome-young-man-face-beard-vector-illustration-%D0%B3%D1%9F%D0%B3%D2%91%D0%B3%C2%B7%D0%B3-%D0%B3%D1%96%D0%B3%D1%98-187127123.jpg"
        title="Rohan"
      />
      <Story
        image="https://thepreviewapp.com/wp-content/uploads/2020/08/difference-between-instagram-story-and-reels.jpg"
        profileSrc="https://cdn.icon-icons.com/icons2/2643/PNG/512/male_boy_person_people_avatar_icon_159358.png"
        title="Ravi"
      />
      <Story
        image="https://hamleysgumlet.gumlet.io/product/491602821/300/491602821-1.jpg?w=160&dpr=2.6"
        profileSrc="https://www.clipartmax.com/png/middle/405-4050774_avatar-icon-flat-icon-shop-download-free-icons-for-avatar-icon-flat.png"
        title="Sun"
      />
    </div>
  );
}

export default StoryReel;
