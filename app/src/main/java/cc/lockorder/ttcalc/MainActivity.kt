package cc.lockorder.ttcalc

import android.app.TaskStackBuilder
import android.content.Intent
import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.support.v7.widget.RecyclerView
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import kotlinx.android.synthetic.main.exchange_rate_item.view.*
import java.math.BigDecimal
import java.util.*


class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val exchangeRates = ExchangeRateService.fetch()
        val onClickListener = View.OnClickListener {
            TaskStackBuilder.create(this)
                .addNextIntentWithParentStack(
                    Intent(this, CalculatorActivity::class.java)
                ).startActivities()
        }
        findViewById<RecyclerView>(R.id.rateListView).apply {
            setHasFixedSize(true)
            adapter = ExchangeRateAdapter(exchangeRates, onClickListener)
        }
    }
}

object ExchangeRateService {

    fun fetch() : List<ExchangeRate> = listOf(
            ExchangeRate(Currency.getInstance("HKD"), BigDecimal.valueOf(7.85)),
            ExchangeRate(Currency.getInstance("GBP"), BigDecimal.valueOf(10.05))
        )
}

// ---------------------------------------------------------------------------------------------------
//                                  Exchange Rate Section
// ---------------------------------------------------------------------------------------------------

data class ExchangeRate(val currency: Currency, val rate: BigDecimal)

class ExchangeRateAdapter(private val exchangeRates: List<ExchangeRate> = emptyList(),
                          private val onClickListener: View.OnClickListener)
    : RecyclerView.Adapter<ExchangeRateAdapter.ViewHolder>() {

    override fun onCreateViewHolder(p0: ViewGroup, p1: Int): ViewHolder {
        val view : View = LayoutInflater.from(p0.context).inflate(R.layout.exchange_rate_item, p0, false)
        view.calculateExchangeRateButton.setOnClickListener(onClickListener)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(p0: ViewHolder, p1: Int) {
        p0.nameTextView.text = exchangeRates[p1].currency.currencyCode.plus("@").plus(exchangeRates[p1].rate)
    }

    override fun getItemCount(): Int = exchangeRates.count()

    inner class ViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        var nameTextView: TextView = itemView.findViewById(R.id.exchangeRateTextView)
    }
}