// function addition(x: number, y: number): number {
// 	return x + y
// }
// const result: number = addition(10, 20)
// console.log(result)

interface Character {
	name: string
	life: number
	attack: number
	defense: number
	magic: number
}
type Pet = Character
interface Hero extends Character {
	pet?: Pet
}

function damage(characterToDamage: Character, amount: number): number {
	characterToDamage.life -= amount
	characterToDamage.magic -= amount / 2
	return characterToDamage.life
}
// const result = damage({ life: 100, magic: 20 }, 12)
const result = damage(
	{
		life: 100,
		magic: 20,
		name: '',
		attack: 0,
		defense: 0,
	},
	12
)

console.log(result)
