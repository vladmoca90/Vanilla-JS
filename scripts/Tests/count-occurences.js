const stayuses = ["error", "success", "error", "warning", "error"];

function countStatuses(statuses) {
    return statuses.reduce((acc, status) => {
        acc[status] = (acc[status] || 0) + 1;

        return acc;
    }, {});
}

// output { error: 3, success: 1, warning: 1 }