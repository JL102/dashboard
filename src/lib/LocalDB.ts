import Dexie, { type EntityTable, type Table } from 'dexie';
import { type CsvLayout2024Parsed, type CsvLayout2025Parsed } from './stats';
import { authenticated } from './utils';

export interface Event {
	key: string,
	name: string,
	event_code: string,
	event_type: number,
	district: {
		abbreviation: string,
		display_name: string,
		key: string,
		year: number
	},
	city: string,
	state_prov: string,
	country: string,
	start_date: string
	end_date: string,
	year: number,
	team_numbers?: number[];
}

export interface Match {
	key: string,
	comp_level: string,
	set_number: number,
	match_number: number,
	alliances: {
		red: {
			score: number,
			team_keys: string[],
			surrogate_team_keys: string[],
			dq_team_keys: string[],
		},
		blue: {
			score: number,
			team_keys: string[],
			surrogate_team_keys: string[],
			dq_team_keys: string[],
		}
	},
	winning_alliance: 'blue' | 'red',
	event_key: string,
	time: number,
	predicted_time: number,
	actual_time: number
}

export interface ETagResponse {
	url: string; // TBA query URL, e.g. /events/2025/simple
	etag: string; // etag sent back from server, for If-None-Match header
}

const db = new Dexie('AEMDashboard') as Dexie & {
	csv2024: Table<CsvLayout2024Parsed>,
	csv2025: Table<CsvLayout2025Parsed>,
	events: Table<Event>,
	matches: Table<Match>,
	eTagResponses: Table<ETagResponse>,
	current_event: Table<Event>,
	authenticated: Table<{authenticated: boolean}>,
};

// Schema declaration:
db.version(8).stores({
	csv2024: '[eventkey+role+matchNum], [eventkey+teamNum]',
	csv2025: '[eventkey+role+matchNum], [eventkey+teamNum]',
	events: 'key, year',
	matches: 'key, event_key, [event_key+match_number]',
	eTagResponses: '&url',
	current_event: 'key',
	authenticated: '++',
});

export { db };

