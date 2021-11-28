const responses = {
    success: (res, data) => {
        res.json({
            'status': 200,
            'error': false,
            'successful_message': 'Successful message',
            'data': data
        });
    },
    notFound: (res, err) => {
        res.status(404).json({
            'status': 404,
            'error': true,
            'message': err?? 'Not Found'
        })
    },
    error: (res, err) => {
        res.status(400).json({
            'status': 400,
            'error': true,
            'message': err?? '400 error'
        })
    }
}

module.exports = responses;