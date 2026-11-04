describe('addToStudent project', function () {
    it('adds grade and conviction details to the student', function () {
        return withObjectScript('addToObject/student.js', function (evaluate) {
            const result = evaluate(
                '(() => { const student = { name: "Ada" }; const updated = addToStudent(student); return { student, updated }; })()'
            );

            expect(result.updated).toBe(result.student);
            expect(result.student).toEqual({
                name: 'Ada',
                grade: 10,
                pastConvictions: false,
            });
        });
    });
});
