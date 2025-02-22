import assert from "./assert";
import { mode } from 'mathjs'

type stringbool = 'TRUE' | 'FALSE';
type stringnum = `${number}`;
type role = 'r1' | 'r2' | 'r3' | 'b1' | 'b2' | 'b3';
type startpos = 'start1' | 'start2' | 'start3' | 'start4';
type pickupMethod2024 = 'ground only' | 'source only' | 'ground and source' | 'none';
type climbStatus2024 = 'no attempt' | 'climb failed' | 'climb success';
type ColumnKey = `Column ${number}`;
type ScoringLocation2024 = 'dropped'|'speaker'|'amp'|'trap';

interface AutoPiece2024 {
	heldNoteID: number;
	scoringLocation: ScoringLocation2024;
	timeToPickup: number;
	timeToScore: number;
}

interface TeleopPiece2024 {
	scoringLocation: ScoringLocation2024;
	timeToPickup: number;
	timeToScore: number;
}

export interface CsvLayout2024Raw {
	autoFailure: stringbool;
	avgCycleTime: stringnum;
	broke: stringbool;
	canScoreInAmp: stringbool;
	canScoreInSpeaker: stringbool;
	canScoreInTrap: stringbool;
	climbStartTime: stringnum;
	climbStatus: climbStatus2024;
	"didn'tFieldRobot": stringbool;
	died: stringbool;
	eventkey: string;
	gotStuck: stringbool;
	matchNum: stringnum;
	otherInfo: string;
	pickupMethod: pickupMethod2024;
	redCard: stringbool;
	role: role;
	scoredInAuto: stringnum;
	scoredInTeleop: stringnum;
	scouterInitials: string;
	startPos: startpos;
	stoppedAndRestarted: stringbool;
	teamNum: stringnum;
	tipped: stringbool;
	totalScored: stringnum;
	trapCount: stringnum;
	yellowCard: stringbool;
	[key: ColumnKey]: string;
}

export interface CsvLayout2024Parsed {
	key: string; // eventkey_matchnum_role, e.g. 2024mrcmp_4_r1
	autoFailure: boolean;
	avgCycleTime: number;
	broke: boolean;
	canScoreInAmp: boolean;
	canScoreInSpeaker: boolean;
	canScoreInTrap: boolean;
	climbStartTime: number;
	climbStatus: climbStatus2024;
	didNotFieldRobot: boolean;
	died: boolean;
	eventkey: string;
	gotStuck: boolean;
	matchNum: number;
	otherInfo: string;
	pickupMethod: pickupMethod2024;
	redCard: boolean;
	role: role;
	scoredInAuto: number;
	scoredInTeleop: number;
	scouterInitials: string;
	startPos: startpos;
	stoppedAndRestarted: boolean;
	teamNum: number;
	tipped: boolean;
	totalScored: number;
	trapCount: number;
	yellowCard: boolean;
	auto: AutoPiece2024[];
	teleop: TeleopPiece2024[];
}

function parseBool(item: stringbool) {
	return item.toLowerCase() === 'true';
}

function isValidScoringLocation2024(location: string): location is ScoringLocation2024 {
	return location === 'dropped' || location === 'amp' || location === 'speaker' || location === 'trap';
}

export function parseCsvLayout2024(input: CsvLayout2024Raw[]): CsvLayout2024Parsed[] {
	return input.map(item => {
		// find auto columns and teleop columns
		const autoStrings = [];
		const teleopStrings = [];
		
		// get list of "Column X" keys sorted numerically
		let keys = Object.keys(item).filter(key => key.startsWith('Column'));
		let columnNums = keys.map(key => parseInt(key.replace(/Column /, '')))
		columnNums.sort();
		
		let isAuto = false;
		let isTeleop = false;
		for (let columnNum of columnNums) {
			let key = 'Column ' + columnNum as ColumnKey;
			let thisCell = item[key];
			if (thisCell === 'auto') {
				isAuto = true;
				isTeleop = false;
				continue;
			}
			if (thisCell === 'teleOp') {
				isTeleop = true;
				isAuto = false;
				continue;
			}
			if (thisCell == '') continue; // skip blanks
			if (isAuto) {
				autoStrings.push(thisCell);
			}
			if (isTeleop) {
				teleopStrings.push(thisCell);
			}
		}
		
		assert(autoStrings.length % 4 === 0, `auto arr length ${autoStrings.length} not div by 4! ${JSON.stringify(autoStrings)}`);
		assert(teleopStrings.length % 3 === 0, `teleop arr length ${teleopStrings.length} not div by 3! ${JSON.stringify(teleopStrings)}`);
		
		let auto: AutoPiece2024[] = [];
		for (let i = 0; i < autoStrings.length; i += 4) {
			let [heldNoteId, scoringLocation, timeToPickup, timeToScore] = autoStrings.slice(i, i + 4);
			assert(isValidScoringLocation2024(scoringLocation), `Invalid scoring location ${scoringLocation}`);
			auto.push({
				heldNoteID: parseInt(heldNoteId),
				scoringLocation,
				timeToPickup: parseFloat(timeToPickup),
				timeToScore: parseFloat(timeToScore),
			});
		}
		let teleop: TeleopPiece2024[] = [];
		for (let i = 0; i < teleopStrings.length; i += 3) {
			let [scoringLocation, timeToPickup, timeToScore] = teleopStrings.slice(i, i + 3);
			assert(isValidScoringLocation2024(scoringLocation), `Invalid scoring location ${scoringLocation}`);
			teleop.push({
				scoringLocation,
				timeToPickup: parseFloat(timeToPickup),
				timeToScore: parseFloat(timeToScore),
			});
		}
		
		let key = `${item.eventkey}_${item.matchNum}_${item.role}`;
		
		return {
			key,
			autoFailure: parseBool(item.autoFailure),
			avgCycleTime: parseFloat(item.avgCycleTime),
			broke: parseBool(item.broke),
			canScoreInAmp: parseBool(item.canScoreInAmp),
			canScoreInSpeaker: parseBool(item.canScoreInSpeaker),
			canScoreInTrap: parseBool(item.canScoreInTrap),
			climbStartTime: parseFloat(item.climbStartTime),
			climbStatus: item.climbStatus,
			didNotFieldRobot: parseBool(item["didn'tFieldRobot"]),
			died: parseBool(item.died),
			eventkey: item.eventkey,
			gotStuck: parseBool(item.gotStuck),
			matchNum: parseFloat(item.matchNum),
			otherInfo: item.otherInfo,
			pickupMethod: item.pickupMethod,
			redCard: parseBool(item.redCard),
			role: item.role,
			scoredInAuto: parseFloat(item.scoredInAuto),
			scoredInTeleop: parseFloat(item.scoredInTeleop),
			scouterInitials: item.scouterInitials,
			startPos: item.startPos,
			stoppedAndRestarted: parseBool(item.stoppedAndRestarted),
			teamNum: parseFloat(item.teamNum),
			tipped: parseBool(item.tipped),
			totalScored: parseFloat(item.totalScored),
			trapCount: parseFloat(item.trapCount),
			yellowCard: parseBool(item.yellowCard),
			auto,
			teleop,
		}
	})
}

// JL note: Generic so we can add 2025 in the same function
export function filterByTeam<T extends CsvLayout2024Parsed>(input: T[], teamNum: number|undefined): T[] {
	return input.filter(item => item.teamNum === teamNum) as T[];
}

export function avgStat<T extends CsvLayout2024Parsed>(input: T[], stat: keyof T, numDecimalPlaces = 2): number {
	if (input.length === 0) return 0; // avoid dividing by zero
	// get sum of all values of this stat
	let total = 0;
	for (let item of input) {
		let thisValue = item[stat];
		assert(typeof thisValue === 'number', `Stat ${String(stat)} is non number!`);
		total += thisValue;
	}
	let value = total / input.length;
	return round(value, numDecimalPlaces);
}

export function modeStat<T extends CsvLayout2024Parsed>(input: T[], stat: keyof T): T[typeof stat]|undefined {
	if (input.length === 0) return undefined;
	const thisStatArr = getArrOfStat(input, stat);
	// @ts-ignore
	return mode(thisStatArr);
}

export function getArrOfStat<T extends CsvLayout2024Parsed>(input: T[], stat: keyof T): T[typeof stat][] {
	return input.map(item => item[stat]);
}

function round(value: number, numDecimalPlaces: number) {
	if (numDecimalPlaces < 0) return value;
	return parseFloat(value.toFixed(numDecimalPlaces));
}

export function getPreferredPickupMethod2024(input: CsvLayout2024Parsed[]): pickupMethod2024 {
	let ground = 0;
	let source = 0;
	let none = 0;
	let groundAndSource = 0;
	for (let item of input) {
		switch (item.pickupMethod) {
			case 'ground only': ground++; break;
			case 'source only': source++; break;
			case 'none': none++; break;
			case 'ground and source': groundAndSource++; break;
		}
	}
	// todo figure out how to use the above code to get most frequent pickup method
	return modeStat(input, 'pickupMethod') as pickupMethod2024;
}

export function getPreferredScoringMethod2024(input: CsvLayout2024Parsed[]): string {
	let speakers = 0;
	let amps = 0;
	for (let item of input) {
		for (let piece of [...item.auto, ...item.teleop]) {
			if (piece.scoringLocation === 'speaker') speakers++;
			if (piece.scoringLocation === 'amp') amps++;
		}
	}
	if (speakers === 0 && amps === 0) return 'none';
	if (speakers > amps) return 'speaker';
	if (speakers < amps) return 'amp'
	return 'equal';
}

export function getNumStartPos2024(input: CsvLayout2024Parsed[]) {
	
}