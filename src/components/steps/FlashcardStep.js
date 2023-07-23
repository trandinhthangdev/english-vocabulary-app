import React, {useEffect, useState} from "react";
import {useSpeechSynthesis} from "react-speech-kit";
const FlashcardStep = (props) => {
    const {data}  = props;
    // const [currentCard, setCurrentCard] = useState(0)
    // const [isFront, setIsFront] = useState(true);
    const [options, setOptions] = useState({
        currentCard: 0,
        isFront: true
    })
    const {currentCard, isFront} = options;
    const { speak } = useSpeechSynthesis();


    const handleKeyDown = (event) => {
        // Check if the Enter key is pressed
        if (event.key === 'Enter' || event.key === ' ') {
            setOptions(prev => ({
                ...prev,
                isFront: !prev.isFront
            }))
        }

        // Check if the Right arrow key is pressed
        if (event.key === 'ArrowRight') {
            setOptions(prev => ({
                currentCard: prev.currentCard === data.length - 1 ? data.length - 1 : prev.currentCard + 1,
                isFront: true
            }))
        }

        // Check if the Left arrow key is pressed
        if (event.key === 'ArrowLeft') {
            setOptions(prev => ({
                currentCard: prev.currentCard === 0 ? 0 : prev.currentCard - 1,
                isFront: true
            }))
        }
    };

    useEffect(() => {
        speak({text: data[currentCard].word})
    }, [isFront, currentCard])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        }
    }, [])

    const item = data[currentCard];
    console.log('data.length',data.length);
    console.log('current',currentCard)
    return (
        <div className="flex items-center justify-center">
            <div onClick={() => setOptions(prev => ({
                ...prev,
                isFront: !prev.isFront
            }))} className={`shadow p-2 w-[480px] max-w-[480px] min-h-[360px] flex flex-col items-center justify-center`}>
                {
                    isFront
                        ?
                        <>
                            <div>
                                {item.word}
                            </div>
                            <div>
                                {item.phonetic}
                            </div>
                        </>
                        :
                        <>
                            {item.hasImg && <div>
                                <img className="w-[240px]" src={`https://res.cloudinary.com/darrspnxu/raw/upload/words/${item.id}.png`}/>
                            </div>}
                            <div>
                                {item.type}
                            </div>
                            <div className="text-center cursor-pointer hover:text-gray-800">
                                {item.defineEn}
                            </div>
                            <div className="text-center text-red-600">
                                {item.defineVi}
                            </div>
                        </>
                }
            </div>
        </div>
    )
}

export default FlashcardStep;
