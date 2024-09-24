<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seminar Registration</title>
</head>
<body>
    <h1>Seminar Registration</h1>

    <p><strong>Name:</strong> {{ is_string($name) ? $name : 'N/A' }}</p>
    <p><strong>Email:</strong> {{ is_string($email) ? $email : 'N/A' }}</p>
    <p><strong>Phone:</strong> {{ is_string($phone) ? $phone : 'N/A' }}</p>
    <p><strong>Preferred Date:</strong> {{ is_string($date) ? $date : 'N/A' }}</p>

    @if(!empty($message) && is_string($message))
        <h3>Additional Message:</h3>
        <p>{{ $message }}</p>
    @endif

</body>
</html>
