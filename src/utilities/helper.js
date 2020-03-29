export function isQuestionAnswered(authedUserAnswers, questionId){

    if (authedUserAnswers){
        const answeredKeys = Object.keys(authedUserAnswers);

        if (answeredKeys.includes(questionId)){
            return {
                isAnswered: true,
                answer: authedUserAnswers[questionId]
            }
        }


    }

    return {};
}