import assert from "./assert";
import { mode, max } from 'mathjs'

type stringbool = 'TRUE' | 'FALSE';
type stringnum = `${number}`;
type role = 'r1' | 'r2' | 'r3' | 'b1' | 'b2' | 'b3';
type startpos = 'start1' | 'start2' | 'start3' | 'start4';
type startpos2025 = 'start1' | 'start2' | 'start3' | 'start4' | 'start5' | 'start6';
type pickupMethod2024 = 'ground only' | 'source only' | 'ground and source' | 'none';
type pickupMethod2025 = 'ground only' | 'reef only' | 'ground and reef' | 'none';
type climbStatus2024 = 'no attempt' | 'climb failed' | 'climb success';
type climbStatus2025 = 'no attempt' | 'fail' | 'shallow' | 'deep';
type ColumnKey = `Column ${number}`;
type ScoringLocation2024 = 'dropped' | 'speaker' | 'amp' | 'trap';
type ScoringLocation2025 = 'drop' | 'reef' | 'processor' | 'net';

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

interface AutoPiece2025 {
	heldPiece: string;
	location: ScoringLocation2025;
	success: boolean;
}

interface TeleopPiece2025 {
	heldPiece: string;
	location: ScoringLocation2025;
	success: boolean;
}

// no csv layout 2025 raw yet, if this app is the one creating the csv

export interface CsvLayout2025Parsed {
	key: string; // eventkey_matchnum_role, e.g. 2024mrcmp_4_r1

	eventkey: string;
	role: role;
	scouterInitials: string;
	matchNum: number;
	teamNum: number;
	startPos: string;
	mobility: string;
	pickupMethodCoral: string;
	pickupMethodAlgae: string;
	climbStatus: climbStatus2025;

	// fails list (nine booleans)
	stoppedAndRestarted: boolean;
	died: boolean;
	tipped: boolean;
	redCard: boolean;
	yellowCard: boolean;
	broke: boolean;
	autofailure: boolean;
	gotStuck: boolean;
	didNotFieldRobot: boolean;

	otherInfo: string;
	coralScoredAuto: number;
	coralScoredTeleop: number;
	algaeScoredAuto: number;
	algaeScoredTeleop: number;
	totalScored: number;
	canScoreInL1: boolean;
	canScoreInL2: boolean;
	canScoreInL3: boolean;
	canScoreInL4: boolean;
	canScoreInNet: boolean;
	canScoreInProcessor: boolean;
	
	scoredL1: number;
	scoredL2: number;
	scoredL3: number;
	scoredL4: number;	
	scoredNet: number;
	scoredProcessor: number;
	missedReef: number;
	missedNet: number;
	missedProcessor: number;
	climbFailReason: string;
	auto: AutoPiece2025[];
	teleop: TeleopPiece2025[];
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

export type CsvLayoutAnyParsed = CsvLayout2024Parsed | CsvLayout2025Parsed;

function parseBool(item: stringbool) {
	return item.toLowerCase() === 'true';
}

function isValidScoringLocation2024(location: string): location is ScoringLocation2024 {
	return location === 'dropped' || location === 'amp' || location === 'speaker' || location === 'trap';
}

export function parseQr2025(input: string): CsvLayout2025Parsed {
	// remove any trailing commas
	while (input.endsWith(',')) {
		input = input.slice(0, -1);
	}
	let [eventkey,
		role,
		scouterInitials,
		matchNumS,
		teamNumS,
		startPos,
		mobility,
		pickupMethodCoral,
		pickupMethodAlgae,
		climbStatusS,
		stoppedAndRestartedS,
		diedS,
		tippedS,
		redCardS,
		yellowCardS,
		brokeS,
		autofailureS,
		gotStuckS,
		didNotFieldRobotS,
		
		otherInfo,
		coralScoredAutoS,
		coralScoredTeleopS,
		algaeScoredAutoS,
		algaeScoredTeleopS,
		totalScoredS,
		canScoreInL1S,
		canScoreInL2S,
		canScoreInL3S,
		canScoreInL4S,
		canScoreInNetS,
		canScoreInProcessorS,
		
		scoredL1S,
		scoredL2S,
		scoredL3S,
		scoredL4S,
		scoredNetS,
		scoredProcessorS,
		missedReefS,
		missedNetS,
		missedProcessorS,
		climbFailReason,
		...autoAndTeleop] = input.split(',');
	let matchNum = parseInt(matchNumS);
	let teamNum = parseInt(teamNumS);
	let stoppedAndRestarted = parseBool2025(stoppedAndRestartedS);
	let died = parseBool2025(diedS);
	let tipped = parseBool2025(tippedS);
	let redCard = parseBool2025(redCardS);
	let yellowCard = parseBool2025(yellowCardS);
	let broke = parseBool2025(brokeS);
	let autofailure = parseBool2025(autofailureS);
	let gotStuck = parseBool2025(gotStuckS);
	let didNotFieldRobot = parseBool2025(didNotFieldRobotS);
	let coralScoredAuto = parseInt(coralScoredAutoS);
	let coralScoredTeleop = parseInt(coralScoredTeleopS);
	let algaeScoredAuto = parseInt(algaeScoredAutoS);
	let algaeScoredTeleop = parseInt(algaeScoredTeleopS);
	let totalScored = parseInt(totalScoredS);
	let canScoreInL1 = parseBool2025(canScoreInL1S);
	let canScoreInL2 = parseBool2025(canScoreInL2S);
	let canScoreInL3 = parseBool2025(canScoreInL3S);
	let canScoreInL4 = parseBool2025(canScoreInL4S);
	let canScoreInNet = parseBool2025(canScoreInNetS);
	let canScoreInProcessor = parseBool2025(canScoreInProcessorS);
	
	let scoredL1 = parseInt(scoredL1S);
	let scoredL2 = parseInt(scoredL2S);
	let scoredL3 = parseInt(scoredL3S);
	let scoredL4 = parseInt(scoredL4S);
	let scoredNet = parseInt(scoredNetS);
	let scoredProcessor = parseInt(scoredProcessorS);
	let missedReef = parseInt(missedReefS);
	let missedNet = parseInt(missedNetS);
	let missedProcessor = parseInt(missedProcessorS);
	let auto: AutoPiece2025[] = [];
	let teleop: TeleopPiece2025[] = [];
	
	eventkey = parseEventName2025(eventkey);
	let climbStatus = climbStatusS as climbStatus2025; // note: no checks, trusting input
	
	// Split autoAndTeleop into arrays
	let autoArr: string[] = [];
	let teleopArr: string[] = [];
	assert(autoAndTeleop.shift()?.toLowerCase() === 'auto', 'Expected string "auto" in start of autoAndTeleop array!');
	let isAuto = true;
	for (let item of autoAndTeleop) {
		if (item.toLowerCase() === 'teleop') {
			isAuto = false;
			continue;
		}
		if (isAuto) {
			autoArr.push(item);
		} else {
			teleopArr.push(item);
		}
	}
	console.log(autoAndTeleop, autoArr, teleopArr);

	// parse auto and teleop arrays
	for (let i = 0; i < autoArr.length; i += 3) {
		let [heldPiece, location, success] = autoArr.slice(i, i + 3);
		if (typeof heldPiece !== 'string' || typeof location !== 'string' || typeof success !== 'string') {
			console.warn('autoArr is incomplete', autoArr);
			break;
		}
		auto.push({
			heldPiece,
			location: location as ScoringLocation2025,
			success: parseBool2025(success),
		});
	}
	for (let i = 0; i < teleopArr.length; i += 3) {
		let [heldPiece, location, success] = teleopArr.slice(i, i + 3);
		if (typeof heldPiece !== 'string' || typeof location !== 'string' || typeof success !== 'string') {
			console.warn('teleopArr is incomplete', teleopArr);
			break;
		}
		teleop.push({
			heldPiece,
			location: location as ScoringLocation2025,
			success: parseBool2025(success),
		});
	}
	
	let key = `${eventkey}_${matchNum}_${role}`;

	return {
		key,
		eventkey,
		role: role as role,
		scouterInitials,
		matchNum,
		teamNum,
		startPos: startPos as startpos2025,
		mobility,
		pickupMethodCoral,
		pickupMethodAlgae,
		climbStatus,
		stoppedAndRestarted,
		died,
		tipped,
		redCard,
		yellowCard,
		broke,
		autofailure,
		gotStuck,
		didNotFieldRobot,
		otherInfo,
		coralScoredAuto,
		coralScoredTeleop,
		algaeScoredAuto,
		algaeScoredTeleop,
		totalScored,
		canScoreInL1,
		canScoreInL2,
		canScoreInL3,
		canScoreInL4,
		
		canScoreInNet,
		canScoreInProcessor,
		scoredL1,
		scoredL2,
		scoredL3,
		scoredL4,
		scoredNet,
		scoredProcessor,
		missedReef,
		missedNet,
		missedProcessor,
		climbFailReason,
		auto,
		teleop,
	}
}

function parseBool2025(item: string|stringbool) {
	return item.toLowerCase() === 'true';
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
export function filterByTeam<T extends CsvLayoutAnyParsed>(input: T[], teamNum: number | undefined): T[] {
	return input.filter(item => item.teamNum === teamNum) as T[];
}

export function avgStat<T extends CsvLayoutAnyParsed>(input: T[], stat: keyof T, numDecimalPlaces = 2): number {
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

export function orStat<T extends CsvLayoutAnyParsed>(input: T[], stat: keyof T): boolean {
	for (let item of input) {
		if (item[stat]) return true;
	}
	return false;
}

export function maxStat<T extends CsvLayoutAnyParsed>(input: T[], stat: keyof T): number {
	if (input.length === 0) return 0;
	const thisStatArr = getArrOfStat(input, stat) as number[];
	return max(thisStatArr);
}

// export function minNonZeroStat<T extends CsvLayoutAnyParsed>(input: T[], stat: keyof T): number {
// 	if (input.length === 0) return 0;
// 	const thisStatArr = getArrOfStat(input, stat) as number[];
// 	let minNonZero = Infinity;
// 	for (let item of thisStatArr) {
// 		if (item !== 0 && item < minNonZero) minNonZero = item;
// 	}
// 	return minNonZero;
// }

export function modeStat<T extends CsvLayoutAnyParsed>(input: T[], stat: keyof T): T[typeof stat] | undefined {
	if (input.length === 0) return undefined;
	const thisStatArr = getArrOfStat(input, stat);
	// @ts-ignore
	return mode(thisStatArr);
}

export function getArrOfStat<T extends CsvLayoutAnyParsed>(input: T[], stat: keyof T): T[typeof stat][] {
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

export function getPreferredPickupMethod2025(input: CsvLayout2025Parsed[]): pickupMethod2025 {
	let ground = 0;
	let reef = 0;
	let none = 0;
	let groundAndReef = 0;
	for (let item of input) {
		switch (item.pickupMethodCoral) {
			case 'ground only': ground++; break;
			case 'reef only': reef++; break;
			case 'none': none++; break;
			case 'ground and reef': groundAndReef++; break;
		}
	}
	// todo figure out how to use the above code to get most frequent pickup method
	return modeStat(input, 'pickupMethodCoral') as pickupMethod2025;
}

// export function getMaxScoredPerMatch2025(input: CsvLayout2025Parsed[]): number {
// 	let maxScored = 0;
// 	for (let item of input) {
// 		let totalScored = item.totalScored;
// 		if (totalScored > maxScored) maxScored = totalScored;
// 	}
// 	return maxScored;
// }

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

export function getMinNonZeroCoral2025(input: CsvLayout2025Parsed[]): number {
	if (input.length === 0) return 0;

	let numCoral = input.map(item => item.coralScoredAuto + item.coralScoredTeleop);
	let minNonZero = Infinity;
	for (let item of numCoral) {
		if (item !== 0 && item < minNonZero) minNonZero = item;
	}
	return minNonZero;
}

export function getAvgMissedTotal2025(input: CsvLayout2025Parsed[], numDecimalPlaces = 2): number {
	if (input.length === 0) return 0;

	let missed = input.map(item => item.missedReef + item.missedNet + item.missedProcessor);
	let total = 0;
	for (let item of missed) {
		total += item;
	}
	let value = total / input.length;
	return round(value, numDecimalPlaces);
}

export function getClimbCapability2025(input: CsvLayout2025Parsed[]): string {
	let canShallow = false;
	let canDeep = false;
	input.forEach(item => {
		if (item.climbStatus === 'shallow') canShallow = true;
		if (item.climbStatus === 'deep') canDeep = true;
	});
	if (canShallow && canDeep) return 'Both';
	if (canShallow) return 'Shallow only';
	if (canDeep) return 'Deep only';
	return 'None';
}

export function getScoreCapability2025(input: CsvLayout2025Parsed[]): string {
	let canL1 = orStat(input, 'canScoreInL1');
	let canL2 = orStat(input, 'canScoreInL2');
	let canL3 = orStat(input, 'canScoreInL3');
	let canL4 = orStat(input, 'canScoreInL4');
	let canNet = orStat(input, 'canScoreInNet');
	let canProcessor = orStat(input, 'canScoreInProcessor');
	let capabilities: string[] = [];
	if (canL1) capabilities.push('L1');
	if (canL2) capabilities.push('L2');
	if (canL3) capabilities.push('L3');
	if (canL4) capabilities.push('L4');
	if (canNet) capabilities.push('Net');
	if (canProcessor) capabilities.push('Processor');
	if (capabilities.length === 0) return 'None';
	return capabilities.join(', ');
};

export function getClimbSuccessRate2025(input: CsvLayout2025Parsed[]): string {
	if (input.length === 0) return '0 of 0';
	let successes = input.filter(item => item.climbStatus === 'shallow' || item.climbStatus === 'deep').length;
	let attempts = input.filter(item => item.climbStatus !== 'no attempt').length;
	return `${successes} of ${attempts}`;
}

// export function getAvgBreakdown2025(input: CsvLayout2025Parsed[]): string {
// 	let l1 = 0, l2 = 0, l3 = 0, l4 = 0;
	
// }

export function getNumStartPos2024(input: CsvLayout2024Parsed[]) {

}

function parseEventName2025(eventName: string) {
	// Parse event name provided by app
	switch (eventName) {
		case '2025OregSFcmp': return '2025orsal';
		case '2025GlacPkcmp': return '2025wasno';
		case '2025Clackmcmp': return '2025orore';
		case '2025Sammamcmp': return '2025wasam';
		case '2025SnDomecmp': return '2025wayak';
		case '2025BonLakcmp': return '2025wabon';
		case '2025Wilsoncmp': return '2025orwil';
		case '2025Auburncmp': return '2025waahs';
		case '2025PNWDiscmp': return '2025pncmp';
		default: return eventName;
	}
}