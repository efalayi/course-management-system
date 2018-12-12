import chalk from 'chalk'

const printMessage = (message, color) => {
  console.log(chalk[color](message))
}

export default printMessage
