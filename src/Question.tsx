interface Props {
    question: string,
    answer: string
}

export default function Question({question, answer}: Props) {

    
    return (
        <div className="question-box">
            <h4 className="question">{question}</h4>
            <h4 className="answer">{answer}</h4>
            <hr className="small-line"/>
        </div>
    )
}