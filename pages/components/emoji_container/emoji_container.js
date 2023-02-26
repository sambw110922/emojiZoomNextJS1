
import Image from "next/image";

export default function EmojiContainer(){

    return (

        <section id="emojiContainer">

            <h2>Scroll over an emoji to zoom in on it.</h2>

            <div id="emojiGrid">

                <div id="emoji1" class="emojiItem">
                    <div class="emojiDescription">
                        <h3>Happy</h3>
                        <p>This is a happy emoji</p>
                    </div>
                    <div id="imgEmoji1" className="anEmoji">
                    </div>
                        
                </div>

                <div id="emoji2" class="emojiItem">
                    <div class="emojiDescription">
                        <h3>Sad</h3>
                        <p>This is a sad emoji</p>
                    </div>
                    <div id="imgEmoji2" className="anEmoji">
                    </div>
                </div>

                <div id="emoji3" class="emojiItem">
                    <div class="emojiDescription">
                        <h3>Angry</h3>
                        <p>This is an angry emoji</p>
                    </div>
                    <div id="imgEmoji3" className="anEmoji">
                    </div>
                </div>

                <div id="emoji4" class="emojiItem">
                    <div class="emojiDescription">
                        <h3>Very Happy</h3>
                        <p>This is a very happy emoji</p>
                    </div>
                    <div id="imgEmoji4" className="anEmoji">
                    </div>
                </div>

            </div>

        </section>

    );

}