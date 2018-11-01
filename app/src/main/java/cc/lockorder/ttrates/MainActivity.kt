package cc.lockorder.ttrates

import android.os.Bundle
import android.support.v7.app.AppCompatActivity
import android.view.MenuItem
import android.widget.FrameLayout

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        supportActionBar!!.setDisplayHomeAsUpEnabled(true)

        if (findViewById<FrameLayout>(R.id.rate_list_fragment_container) != null) {
            if (savedInstanceState != null) {
                return
            }
            supportFragmentManager.apply {
                addOnBackStackChangedListener {
                    supportActionBar!!.setDisplayHomeAsUpEnabled(supportFragmentManager.backStackEntryCount > 1)
                }
                beginTransaction()
                    .add(R.id.rate_list_fragment_container, ExchangeRateListFragment().apply { arguments = intent.extras })
                    .addToBackStack(null)
                    .commit()
            }
        }
    }

    override fun onOptionsItemSelected(item: MenuItem): Boolean {
        when (item.itemId) {
            android.R.id.home -> {
                supportFragmentManager.popBackStack()
                return true
            }
        }
        return super.onOptionsItemSelected(item)
    }
}
