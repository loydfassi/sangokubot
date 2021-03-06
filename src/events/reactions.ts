import { Message, MessageReaction } from "discord.js"
interface Reactions {
    [key: string]: string
}
const reactions: Reactions = require('../../reactions.json') // import all possible reactions

const reactToMessages: (message: Message) => void = (message): void => {
    const keyword: string = message.content.toLowerCase()

    Object.keys(reactions).forEach((key) => { // for each entry in our JSON
        if (keyword.match(key)) { // if we have a match with our keyword
            const emoji: string = reactions[`${key}`] // construct a string with the value of our match
            message.react(emoji) // then react to it !
        }
    })
}
export default reactToMessages