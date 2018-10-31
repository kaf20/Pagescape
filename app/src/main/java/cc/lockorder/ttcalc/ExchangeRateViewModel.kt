package cc.lockorder.ttcalc

import android.arch.lifecycle.ViewModel;
import java.math.BigDecimal
import java.util.*

class ExchangeRateViewModel : ViewModel() {

    fun fetch() : List<RateEntry> = listOf(
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), null, BigDecimal.valueOf(.894), BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), null, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), null, null, BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), BigDecimal.valueOf(.897), null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), BigDecimal.valueOf(.897), BigDecimal.valueOf(.895)),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), null, null),
        RateEntry("Cheung Chong", Currency.getInstance("CNY"), BigDecimal.valueOf(.9), BigDecimal.valueOf(.894), BigDecimal.valueOf(.897), BigDecimal.valueOf(.895))
    )
}
