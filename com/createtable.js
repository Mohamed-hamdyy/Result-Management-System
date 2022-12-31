<TableContainer component={Paper}>
<Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
        <TableRow>
            <TableCell>Course ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Total Hours</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Instructor Username</TableCell>

        </TableRow>
    </TableHead>
    <TableBody>
       {Courses && Courses.map((title) => (
            <TableRow
                key={Courses}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell align="left">{title}</TableCell>

            </TableRow>
        ))}
    </TableBody>
</Table>
</TableContainer>


          </div>

);
}