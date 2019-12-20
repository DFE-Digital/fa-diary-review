module.exports = class Child {

    constructor(logs) {
        this.logs = []
        logs.forEach(log => {
            this.logs = this.logs.concat(log.answers)
        })
    }

    logsGroupedByTopic() {
        return this.logs.reduce(
            (accumulator, currentValue) => {
                const key = currentValue.heading.replace(/\s/g, '-').replace(',', '').toLowerCase()
                if (!accumulator[key]) {
                    accumulator[key] = []
                }
                accumulator[key].push(currentValue.questions)
                return accumulator
            },
            {}
        )
    }

    logsTopicsGroupedBySubTopic() {
        const grouped = {}
        Object.keys(this.logsGroupedByTopic()).forEach(topic => {
            grouped[topic] = this.logsGroupedByTopic()[topic].reduce(
                (accumulator, currentValue) => {
                    const id = currentValue.find(b => {
                        return b.key === 'id'
                    })
                    const key = id ? id.answer.replace(/\s/g, '-') : 'theme'
                    if (!accumulator[key]) {
                        accumulator[key] = []
                    }
                    const theme = currentValue.find(b => b.key === 'theme')
                    accumulator[key].push(theme ? theme.answer : 'none')
                    return accumulator
                },
                {}
            )
        })

        return grouped
    }

    logsThemeCounts() {
        const logs = this.logsTopicsGroupedBySubTopic()
        Object.keys(logs).forEach(topic => {
            Object.keys(logs[topic]).forEach(subTopic => {
                const counts = Object.create(null);
                counts.total = 0
                logs[topic][subTopic].forEach(log => {
                    counts.total++
                    counts[log] = counts[log] ? counts[log] + 1 : 1;
                })
                logs[topic][subTopic] = counts
            })
        })
        return logs
    }
}