import { fetchAllChallenges, fetchAvailableTimes,fetchChallengeDetails, createReservation} from "./apiService.js";
fetchAllChallenges();
fetchAvailableTimes(3, '2024-12-12');
fetchChallengeDetails
createReservation({
    challengeId: 3,
    name: 'Elena',
    email: 'elena@elena.com',
    date: '2024-12-12',
    time: '15:30',
    participants: 2} );
