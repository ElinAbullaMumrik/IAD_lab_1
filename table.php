<?php
foreach ($_SESSION['table'] as $value) { ?>
    <tr>
        <td>
            <h2 class="res"><?php echo $value[0] ?></h2>
        </td>
        <td>
            <h2 class="res"><?php echo $value[1] ?></h2>
        </td>
        <td>
            <h2 class="res"><?php echo $value[2] ?></h2>
        </td>
        <td>
            <h2 class="res"><?php echo $value[3] ? "True" : "False" ?></h2>
        </td>
        <td>
            <h2 class="res"><?php echo $value[4] ?></h2>
        </td>
        <td>
            <h2 class="res"><?php echo number_format($value[5], 10, ".", "")*1000000 ?></h2>
        </td>
    </tr>
<?php }?>