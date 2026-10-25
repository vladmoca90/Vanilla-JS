const events = [
  { service: "payments", status: "success", duration: 100 },
  { service: "payments", status: "error", duration: 300 },
  { service: "users", status: "success", duration: 200 },
  { service: "payments", status: "success", duration: 200 },
  { service: "users", status: "error", duration: 400 },
];

// expect output

[
  {
    service: "payments",
    requests: 3,
    errors: 1,
    averageDuration: 200,
  },
  {
    service: "users",
    requests: 2,
    errors: 1,
    averageDuration: 300,
  },
];

// exercise

function getServiceStats(events) {
  const stats = {};

  for (const event of events) {
    if (!stats[event.service]) {
      stats[event.service] = {
        service: event.service,
        requests: 0,
        errors: 0,
        totalDuration: 0,
      };
    }

    stats[event.service].requests++;

    stats[event.service].totalDuration += event.duration;

    if (event.status === "error") {
      stats[event.service].errors++;
    }
  }

  return Object.values(stats).map((service) => ({
    service: service.service,
    requests: service.requests,
    errors: service.errors,
    averageDuration: service.totalDuration / service.requests,
  }));
}
