export const appointmentData = [
  {
    title: "Website Re-Design Plan",
    startDate: new Date(2018, 5, 25, 12, 35),
    endDate: new Date(2018, 5, 25, 15, 0),
    id: 0,
    doctors: [1, 3, 5],
    location: "Room 1",
    patient: "Anant Agarwal",
  },
  {
    title: "Full Checkup",
    startDate: new Date(2018, 5, 26, 12, 35),
    endDate: new Date(2018, 5, 26, 15, 0),
    id: 1,
    doctors: [2, 4],
    location: "Room 2",
    patient: "Anant Agarwal",
  },
  {
    title: "Dentist",
    startDate: new Date(2018, 5, 27, 12, 35),
    endDate: new Date(2018, 5, 27, 15, 0),
    id: 2,
    doctors: [1, 3],
    location: "Room 3",
    patient: "Anant Agarwal",
  },
  {
    title: "Approve Patient Prescription",
    startDate: new Date(2018, 5, 28, 12, 35),
    endDate: new Date(2018, 5, 28, 15, 0),
    id: 3,
    doctors: [4, 1],
    location: "Room 4",
    patient: "Anant Agarwal",
  },
  {
    title: "Final Budget Review",
    startDate: new Date(2018, 5, 29, 12, 35),
    endDate: new Date(2018, 5, 29, 15, 0),
    id: 4,
    doctors: [5, 1, 3],
    location: "Room 5",
    patient: "Anant Agarwal",
  },
];

export const resourcesData = [
  {
    fieldName: "location",
    title: "Location",
    instances: [
      { id: "Room 1", text: "Room 1" },
      { id: "Room 2", text: "Room 2" },
      { id: "Room 3", text: "Room 3" },
      { id: "Room 4", text: "Room 4" },
      { id: "Room 5", text: "Room 5" },
    ],
  },
  {
    fieldName: "doctors",
    title: "Doctors",
    allowMultiple: true,
    instances: [
      { id: 1, text: "Andrew Glover" },
      { id: 2, text: "Arnie Schwartz" },
      { id: 3, text: "John Heart" },
      { id: 4, text: "Taylor Riley" },
      { id: 5, text: "Brad Farkus" },
    ],
  },
];

export const doctors = [
  {
    text: "Dr Marvin T",
    id: 1,
    color: "#D3E5FF",
  },
  {
    text: "Dr Mayowa A",
    id: 2,
    color: "#D3FFD5",
  },
  {
    text: "Dr Clement Q",
    id: 3,
    color: "#FFD3D9",
  },
  {
    text: "Dr Octa Devon",
    id: 4,
    color: "#E1D3FF",
  },
];

export const locations = [
  { text: "Room 1", id: 1 },
  { text: "Room 2", id: 2 },
];

export const res = [
  {
    fieldName: "doctors",
    title: "Doctors",
    instances: doctors,
    allowMultiple: true,
  },
  {
    fieldName: "roomId",
    title: "Location",
    instances: locations,
  },
];

export const grouping = [
  {
    resourceName: "doctors",
  },
];
