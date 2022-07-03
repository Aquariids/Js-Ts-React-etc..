function doAction(action) {
    switch (action) {
        case 'CREATE':
            return "CREATED";
        case 'ACTIVATE':
            return 'ACTIVATED';
        default:
            const a = action;
            throw new Error(`НЕ ПОНЯЛ ЧТО ТУТ ${a}`);
    }
}
